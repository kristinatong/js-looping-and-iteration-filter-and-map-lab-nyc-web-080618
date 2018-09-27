const driversWithRevenueOver = (array,num) => {
  return array.filter(item => item.revenue > num)
}

const driverNamesWithRevenueOver = (array,num) => {
  return array.filter(item => item.revenue > num).map(item => item.name)
}

const exactMatch = (array,obj) => {
  return array.filter(item => {
    let matches = false
    for(i in obj){
      matches = item[i] === obj[i]
    }
    return matches
  })
}

const exactMatchToList = (array,obj)=>{
  return array.filter(item => {
    let matches = false
    for(i in obj){
      matches = item[i] === obj[i]
    }
    return matches
  }).map(item => item.name)
}
