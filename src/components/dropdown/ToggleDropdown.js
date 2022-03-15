const dropdownView = (props,isOpen) =>{
    if(isOpen==="closed"){
        document.getElementById(props.name).classList.add('closed')
        document.getElementById(props.name).classList.remove('open')
        document.getElementById('chevron_'+props.name).classList.add('chevron_closed')
    }else if(isOpen==="open"){
        document.getElementById(props.name).classList.add('open')
        document.getElementById(props.name).classList.remove('closed')
        document.getElementById('chevron_'+props.name).classList.remove('chevron_closed')
    }
}

export default dropdownView