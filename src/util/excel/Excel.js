import XLSX from 'xlsx';
import fileSaver from 'file-saver';

class Excel {
  static _datenum(v, date1904) {
    if(date1904) v+=1462;
    var epoch = Date.parse(v);
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
  }

  static _sheet_from_array_of_arrays(data, opts){
    var ws = {};
    var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
    for(var R = 0; R !== data.length; ++R) {
      for(var C = 0; C !== data[R].length; ++C) {
        if(range.s.r > R) range.s.r = R;
        if(range.s.c > C) range.s.c = C;
        if(range.e.r < R) range.e.r = R;
        if(range.e.c < C) range.e.c = C;
        var cell = {v: data[R][C] };
        if(cell.v == null) continue;
        var cell_ref = XLSX.utils.encode_cell({c:C,r:R});
        
        if(typeof cell.v === 'number') cell.t = 'n';
        else if(typeof cell.v === 'boolean') cell.t = 'b';
        else if(cell.v instanceof Date) {
          cell.t = 'n'; cell.z = XLSX.SSF._table[14];
          cell.v = this._datenum(cell.v);
        }
        else cell.t = 's';
        
        ws[cell_ref] = cell;
      }
    }
    if(range.s.c < 10000000){
      ws['!ref'] = XLSX.utils.encode_range(range);
    }
    return ws;
  }

  static _s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i=0; i!==s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

  static _createWorkbook() {
    return {SheetNames:[], Sheets:{}};
  }

  /*
    example
    var fileName = '파일명.xlsx'
    var data = [[1,2,3],[true, false, null, "sheetjs"],["foo","bar",new Date("2014-02-19T14:30Z"), "0.3"], ["baz", null, "qux"]]
    var title = "SheetJS";
    write(title, data)
  */

  static getUnlockFormat(fileName, title, callback){
    let data = [['txHash'],['0x068c55b2b43421b4e66188de9fce20bea49b26a7935e4c6169343e4ce71943af'],['0x29d865f8fe3594e290a6009f47498ab57706cfce022a98ffc10269d453409fb2']]
    this.write(fileName, title, data, callback)
  }

  static getWhiteListFormat(fileName, title, callback){
    let data = [
      ['from','min','max'],
      ['0xc98636822709323660e429e015D4E739BD25dab5',0,10],
      ['0x9717Df991e66f18411056Ae8186f1aC2Fa5c6299',3,20],
      ['0x627306090abaB3A6e1400e9345bC60c78a8BEf57',1,10],
      ['0xA70Dff406A82344c43F8416f5530a6Cd0FD8F83D',0,11]
    ]
    this.write(fileName, title, data, callback)
  }

  static write(fileName='test.xlsx', title='sheet', data=[[1,2,3]], callback){
    var wb = this._createWorkbook(), ws = this._sheet_from_array_of_arrays(data);
 
    /* add worksheet to workbook */
    wb.SheetNames.push(title);
    wb.Sheets[title] = ws;
    var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});

    fileSaver.saveAs(new Blob([this._s2ab(wbout)],{type:"application/octet-stream"}), fileName)
    
    if(callback){
      callback()
    }
  }

  static xlsxReader(files, type){
    return new Promise((resolve, reject)=>{
      if(files.length === 0){
        reject('length 0')
      }
      //let fileNameObject = this.getFileNameObject(files[0]);
      let file = files[0];
      
      let fileReader = new FileReader();
      fileReader.onload =(e)=>{
        let data = new Uint8Array(e.target.result);
        let workbook = XLSX.read(data, {type:'array'})
        let result
        if(type === 'whiteList'){
          result = this.xlsxPaserAddDiff(workbook, 3)
        }
        else if(type === 'unlock'){
          result = this.xlsxPaserAddDiff(workbook, 1)
        }
        else {
          result = this.xlsxPaser(workbook)
        }
        
        resolve(result)  
      }
      fileReader.readAsArrayBuffer(file)  
      
    })
  }
  static xlsxPaserAddDiff(workbook, diff){
    let SheetNames = workbook.SheetNames[0]
    let Sheets = workbook.Sheets[SheetNames]
    //let diff = this._getDiff(Sheets)
    let result = {}
    let keyArr = []
    Object.keys(Sheets).forEach((objKey, index)=>{
      if(index !==0){
        if(index <= (diff)){
          keyArr.push(Sheets[objKey].w)
          result[Sheets[objKey].w] = []
        }
        else {
          let keyIdx = (index-1)%(diff)
          let resultKey = keyArr[keyIdx]
          result[resultKey].push(Sheets[objKey].w)
        }
      }
    })
    return result
  }
}

export default Excel