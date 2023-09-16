const incNum = (num)=>{
    return {
        type : 'INCREMENT',
        payload : num
    }
}

const decNum = ()=>{
    return {
        type : 'DECREMENT'
    }
}

export {incNum, decNum};
