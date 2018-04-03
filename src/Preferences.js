const basePreferences = {
  isOnTestData : false,
  apiCallTimeout:7000,
  isDev:process.env.NODE_ENV === 'development',
}

const pref = {
  local : {
    host:'',
    ...basePreferences
  },
  amazon : {
    host:'',
    ...basePreferences
  },
}

//local amazon
window.Preferences = pref.local
export default pref.local
