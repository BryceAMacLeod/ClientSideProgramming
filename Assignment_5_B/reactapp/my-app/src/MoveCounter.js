export function MoveCounter(props) {
    return (
      // enhancement # 2
      <div className="move-counter">
        <div className="x-count">X Move Count: {props.count % 2 === 0 ?
        (props.count === 0 ? 0 : Math.floor(props.count / 2)) :
        (Math.floor(props.count / 2) + 1)}
        </div>
        <div className="o-count">O Move Count: {Math.floor(props.count / 2)}
        </div>
      </div>
    );
}