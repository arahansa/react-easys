import createModalProvider from "./createModalProvider";
import DeleteModalContent from "./DeleteModalContent";
import CreateMemberModalContext from "./CreateMemberModalContext";

export const CONFIRM_DELETE_MODAL = 'confirm_delete';
export const CREATE_MEMBER_MODAL = 'create_member_modal';
const CONTENT_MAP = {
    [CONFIRM_DELETE_MODAL] : DeleteModalContent,
    [CREATE_MEMBER_MODAL] : CreateMemberModalContext
};

export default createModalProvider(CONTENT_MAP);