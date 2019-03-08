import constants from '../lib/constants';

const adminActionsCreator = {
   
    showAdminOption(optionName) {
        return {
            type: constants.SET_ADMIN_BODY,
            name: optionName
        };
    }
};
export default adminActionsCreator;
