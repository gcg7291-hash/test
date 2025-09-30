import React from 'react'
import Child from './Child'

export default function Parent() {
  return (
    <div>
      <Child>
        <div>
        <h1>안녕하세여</h1>
        <h2>배고파</h2>
      </div>
      </Child>
      <Child>
        <div>
          <p>졸립당</p>
          <h1>놀고싶다</h1>
        </div>
      </Child>
      <Child>
        <div>
          <h1>점심 뭐먹지</h1>
          <p>고기 고기</p>
          <h2>졸령</h2>
        </div>
      </Child>

    </div>
  )
}
