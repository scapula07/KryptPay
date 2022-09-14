import {atom} from "recoil"

export const web3State = atom({
    key: 'web3',
    default: {},
  });

  export const currentUserState= atom({
    key: 'user',
    default: {},
  });

  export const WalletAccountState= atom({
    key: 'Account',
    default: "",
  });


 