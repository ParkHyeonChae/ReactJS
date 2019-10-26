import React from 'react';
import Customer from './component/Customer'
import './App.css';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '박현채',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '리액트',
  'birthday' : '123123',
  'gender' : '남자',
  'job' : '디자이너'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '노드',
  'birthday' : '444444',
  'gender' : '남자',
  'job' : '프로그래머'
}
]

class App extends React.Component {
  render() {
    return (
      <div>
        { customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            );
          })
        }
      </div>
    )
  }
}

export default App;
