import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function Cards(props) {
    const cards = props.cards;
    return (
        <div className="container" style={{ padding: 0 }}>
            <div className="row is-multiline">
                {cards.map((item, id) => (
                    <div className="col col--4" key={id}>
                        <Link className="card" to={item.route} style={{ height: '100%' }}>
                            <div className="card__body">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Cards;