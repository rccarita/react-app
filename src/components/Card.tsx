interface Props {
    body: string;
}

interface CardBodyProps {
    title: string;
    text?: string;
}

function Card(props: Props) {
    const { body } = props;

    return (
        <div className="card" style={{
            width: '350px',
        }}>
            <div className="card-body">
                {body}
                <CardBody title="Special title treatment" text="With supporting text below as a natural lead-in to additional content." />
            </div>
        </div>
    )
}

export function CardBody(props: CardBodyProps) {
    const { title, text } = props;
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </>
    )
}


export default Card;