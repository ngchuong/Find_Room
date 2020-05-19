export const SHOW_DIALOG = "SHOW_DIALOG";

export const renderDialog = {
	showDialog: (dialog) =>({
		type: SHOW_DIALOG,
		payload: dialog
	})
}