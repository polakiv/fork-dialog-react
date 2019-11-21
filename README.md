# fork-dialog-react
Ветка диалога из викирипа, со всеми редаксами, редьюсерами и апишками

Ветка 

Dialogs/
	AddMessageForm/
		AddMessageForm.jsx //сама форма
	DialogItem/
		DialogItem.jsx // выводит каждого юзера
	Message/
		Message.jsx // выводит каждый диалог 
		
	Dialogs.jsx	// собирает все три верхних блока AddMessageForm, DialogItem, Message , обратываем, возвращает и тд
	DialogsContainer.jsx // связь между Dialogs и редакс
	
redux/dialogs-reducer и редьюсер и стейт (не допилено в общем, ну да ладно)

	

Первым делом состояние формы
========================================================================================================================================================================================================================
AddMessageForm/AddMessageForm.jsx отправляет данные в AddMessageForm ============== ====================================================================================================================================== 

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div>
                <button>Send222</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

========================================================================================================= DialogItem  принимает пропс , возвращает jsx ===================================================================================================================================================================


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
====================================================================================================================================================================================================
Message.jsx принимает пропс , возвращает jsx   ====================================================================================================================================================================================================

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}
 
export default Message;


====================================================================================================================================================================================================
Dialogs.jsx, принимает пропсы из редьюсера, 
собирает собирает все три верхних блока AddMessageForm, DialogItem, Message  ====================================================================================================================================================================================================
 
import DialogItem from "./DialogItem/DialogItem"; // lfyyst 
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  ); 
	// помещает карту из стейта ( DialogsContainer) в переменную с намерением распечатать ниже...
    
	let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> ); 
	// помещает карту из стейта ( DialogsContainer) в переменную с намерением распечатать ниже...
    
	let newMessageBody = state.newMessageBody;// приходит из стейта ( DialogsContainer) данные newMessageBody

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

  return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>// распечатывает DialogItem.jsx
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>//распечатывает Message.jsx

            </div>
            <AddMessageForm onSubmit={addNewMessage} /> // распечатывает блок текстареа и подписывается на изменения addNewMessage
        </div>
    ) 








