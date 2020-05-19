import { connect } from 'react-redux';
import Dialog from '../components/core/Dialog/Dialog.js';
// import { renderDialog } from '../../actions/dialog';


const mapStateToProps = (state) => ({
	message: state.ui.dialog,
})
// const mapDispatchToProps = {
// 	showDialog: renderDialog.showDialog,
// }

const DialogRender = connect(
	mapStateToProps,
	null
)(Dialog)

export default DialogRender;