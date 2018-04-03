import APICaller from '../APICaller';
import simpleDotProp from '../simpleDotProp';

export default class APIJoin {
	static getIdList(arrayData, fieldName) {
		let data = [];
		if (Array.isArray(arrayData)) {
			arrayData.forEach((item) => {
				if (item[fieldName]) {
					data.push(item[fieldName]);
				}
			})
		}
		return data;
	}

	static inner(source, fieldName, services, serviceFieldName, joinName, ...serviceParams) {
		return new Promise((resolve, reject) => {
			const results = [];
			const idList = APIJoin.getIdList(source, fieldName);

			services(...serviceParams, idList).then((response) => {
				const serviceResults = response.data.results;
				source.forEach((item) => {
					const count = serviceResults.length;
					for(let i = 0; i < count; i++) {
						if (item[fieldName] === serviceResults[i][serviceFieldName]) {
							item[joinName + '_join'] = serviceResults[i];
							results.push(item);
							break;
						}
					}
				})
				resolve({results, source, serviceResults});
			}).catch((ex) => {
				reject(ex);
			});
		});
	}

	static _outerJoin(sourceData, sourceFieldName, joinName, targetData, targetFieldName) {
		const results = [];
		sourceData.forEach((item) => {
			item[joinName + '_join'] = {};
			const count = targetData.length;
			for(let i = 0; i < count; i++) {
				if (item[sourceFieldName] === targetData[i][targetFieldName]) {
					item[joinName + '_join'] = targetData[i];
					break;
				}
			}
			results.push(item);
		});
		return results;
	}

	static outer(arrayData, fieldName, joinName, services, serviceFieldName, ...serviceParams) {
		return new Promise((resolve, reject) => {
			const idList = APIJoin.getIdList(arrayData, fieldName);
			if (idList.length > 0) {
				services(...serviceParams, idList).then((response) => {
					const serviceResults = response.data.results;
					resolve({results: APIJoin._outerJoin(arrayData, fieldName, joinName, serviceResults, serviceFieldName), source:arrayData, merge:serviceResults});
				}).catch((ex) => {
					reject(ex);
				});
			} else {
				new Promise(()=> {
					resolve({results: APIJoin._outerJoin(arrayData, fieldName, joinName, [], serviceFieldName), source:arrayData, merge:[]});
				})
			}
		});
	}

	static count(arrayData, fieldName, joinName, services, ...serviceParams) {
		return new Promise((resolve, reject) => {
			let arrService = [];
			arrayData.forEach((sourceInfo) => {
				arrService.push(services(...serviceParams, sourceInfo[fieldName]));
			});
			APICaller.all(...arrService).then((response) => {
				const results = arrayData.map((info, index) => {
					if (response[index] && response[index].data && response[index].data.count) {
						return {...info, [joinName + '_count']:response[index].data.count}
					} else {
						return {...info, [joinName + '_count']: 0}
					}
				});
				resolve({results: results, source: arrayData, merge: response});
			}).catch((ex) => {
				reject(ex);
			});
		});
	}

	static countCall(sourceURL, 
		sourceFieldName, 
		joinName,
		services,
		...serviceParams
	) {
		return new Promise((resolve, reject) => {
			APICaller.get(sourceURL).then((resposeForSource) => {
				const sourceResults = resposeForSource.data.results;
				APIJoin.count(sourceResults, sourceFieldName, joinName, services, ...serviceParams).then((result) => {
					resolve(
						{...resposeForSource, data:{...resposeForSource.data, ...simpleDotProp.deepCopy(result)}}
					);
				}).catch((ex) => {
					reject(ex);
				});
			}).catch((ex) => {
				reject(ex);
			});
		});
	}

	static outerCall(
		sourceURL, 
		sourceFieldName, 
		joinName,
		services,
		serviceFieldName, 
		...serviceParams
	) {
		return new Promise((resolve, reject) => {
			APICaller.get(sourceURL).then((resposeForSource) => {
				const sourceResults = resposeForSource.data.results;
				APIJoin.outer(sourceResults, sourceFieldName, joinName, services, serviceFieldName, ...serviceParams).then((result) => {
					resolve(result);
				}).catch((ex) => {
					reject(ex);
				});
			}).catch((ex) => {
				reject(ex);
			});
		});
	}
}