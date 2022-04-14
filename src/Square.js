export function Square(props) {
    let color, border;
    switch(props.currentState){
        case 0:
                        color = "gray";
                        break;
                    case 1:
                        color = "blue";
                        break;
                    case 2:
                        color = "yellow";
                        break;
                    default:
                        color = "black";
    }
    if(!props.togglable) {
        border = "2px solid black"
    } else {
        border = "inherit"
    }
    return (
        <td 
            key={props.id}
            id={props.id} 
            value={props.currentState}
            onClick={props.onClick}
            style={{backgroundColor: color, border: border}}>
        </td>
    );
}