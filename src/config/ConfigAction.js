
export const ActionTypes = Object.freeze({
	CHANGE_LANGUAGE:'CHANGE_LANGUAGE',
});

export function changeLanguage(language){
	return (dispatch, getState)=> dispatch(()=>{
    dispatch({
      type:ActionTypes.CHANGE_LANGUAGE,
      payload:{
        language:language
      }
    })
	})
}

