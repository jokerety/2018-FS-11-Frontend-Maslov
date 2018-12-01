import React from 'react';
import {Link} from "react-router-dom";

const header = () => (
    <ul>
        <li>
            <Link to="">Главная</Link>
        </li>
        <li>
            <Link to="/category">Список Категорий</Link>
        </li>
    </ul>
);
export default header;