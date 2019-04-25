import constants from '../../data/constants';

const adminActionsCreator = {
   
    showAdminOption(optionName) {
        return {
            type: constants.SET_ADMIN_BODY,
            name: optionName
        };
    }
};
export default adminActionsCreator;
