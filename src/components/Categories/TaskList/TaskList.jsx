import React from 'react';

const taskList = (props) => (
    <div>
         <div>Категория номер- {props.match.params.id}</div>
         <div> Задания в категории (Coming next ...)</div>
    </div>
);

export default taskList;