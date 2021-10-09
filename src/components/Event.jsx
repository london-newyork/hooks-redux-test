import React from 'react'
import { DELETE_EVENT } from '../actions'

const Event = ({dispatch,event}) => {
    const id = event.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`本当に(id=${id})イベントを削除しても良いですか？`)
        if (result) dispatch({type: DELETE_EVENT,id})
    }

    return (
    <tr>
        {/* indexをtrにつけていたが、MakeFormのJSX内<Event/>にindexをつけているので、こちらのtrにつけても意味がない */}
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
    )
}

export default Event
