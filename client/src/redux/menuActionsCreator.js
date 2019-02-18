import constants from '../lib/constants';

const menuActionsCreator = {
   
    activateMenu(decision,menuItem) {
        return {
            type: constants.MENU_ACTIVATED,
            menuItem: menuItem,
            active: decision
        };
    },
    hideFunction(decision,menuItem) {
        return {
            type: constants.SUBMENU_HIDDEN,
            menuItem: menuItem,
            hideSubmenu: decision
        };
    }
};
export default menuActionsCreator;
