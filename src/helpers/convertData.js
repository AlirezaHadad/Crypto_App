const convertData = (data,type) =>{
    const convertedData = data[type].map(items =>{
        return(
            {
                date : items[0],
                [type] : items[1]
            }
        )
    })
    return convertedData
    console.log(data[type]);
}
export default convertData