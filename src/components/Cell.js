const Cell = ({id , cell , setCells , go , setGo , cells , winningMessage}) => {
    const hanndleClick = (e) => {
        const taken = 
            e.target.classList.contains("circle") || 
            e.target.classList.contains("cross")

            if(taken) { console.log("taken") }

            if(!taken) { 
                if (go === "circle") {
                    e.target.firstChild.classList.add("circle")
                    setGo("cross")
                    handleCellChange("circle")
                }

                if (go === "cross") {
                    e.target.firstChild.classList.add("cross")
                    setGo("circle")
                    handleCellChange("cross")
                }
            }
    }

    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if(index === id) {
                return className
            }else {
                return cell
            }
        })
        setCells(nextCells)
    } 


    return (
        <div className="square" id={id} onClick={winningMessage ? null:  hanndleClick}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell