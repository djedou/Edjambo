import constants from '../lib/constants';

const adminActionsCreator = {
   
    showAdminOption(decision,optionName) {
        return {
            type: constants.SET_ADMIN_BODY,
            name: optionName,
            setted: decision
        };
    }
};
export default adminActionsCreator;
