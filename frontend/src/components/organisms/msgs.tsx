import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { msgsAPI } from '../../api/data'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'
import Msg from '../molecules/msg'

export interface IMsgsCurrentChatProps {
	roomID:string
}

 function MsgsCurrentChat(
	{
		roomID
	}:IMsgsCurrentChatProps
){


	useEffect(() => {
		msgsAPI() 
	}, []) 
 
	const msgsJSON = toJS(currentChatDataStore.msgs)
	console.info('MSGS > ', msgsJSON)


	return (
		<div className='p-5 w-[100%] h-[100%]'>
			{currentChatDataStore.msgs.map((msg, idx) => (
				<div key={idx}>
					<Msg 
					text={msg.text}
					msgID={msg.msgID}
					ava=''
					who={msg.who}
					/> 
				</div> 
			))}
		</div>
	)
}

export default observer(MsgsCurrentChat)