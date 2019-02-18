import constants from '../lib/constants';

const dataActionsCreator = {
   
    setData(data) {
        return {
            type: constants.INITIALIZE_BODY_DATA,
            data: data
        };
    }
};
export default dataActionsCreator;
