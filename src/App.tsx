import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = ()=>{
  const [list, setList] = useState<Item[]>([
    {id:1, name:'Comprar pão na padaria', done: false},
    {id:2, name:'Assistir aulas da b7web', done: true},
  ]);


  const handdleAddText = (taskName:string) =>{
      let newList = [...list];

      newList.push({
        id: list.length+1,
        name: taskName,
        done: false
      });

      setList(newList);
  }

  return (
    <>
      <C.Container>
          <C.Area>
            <C.Header>
              Lista de tarefas
            </C.Header>
            <AddArea onEnter = {handdleAddText} />
           {list.map((item, index)=>
              <ListItem key={index} item={item}/>
           )}
          </C.Area>
      </C.Container>
    </>
  )
}

export default App;