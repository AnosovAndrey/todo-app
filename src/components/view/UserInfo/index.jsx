import React from "react";
import { observer, inject } from "mobx-react";

const UserInfo = inject("Store")(
  observer(({ Store }) => {

    const {user, userInfo} = Store;

    return (
      <div className="field_username">
          {
              user && <span>Last Username: {userInfo}</span>
          }
      </div>
    );
  })
);

export default UserInfo;
