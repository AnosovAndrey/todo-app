import React from "react";
import { observer, inject } from "mobx-react";

const UserInfo = inject("Store")(
  observer(({ getUserInfo }) => {
    return (
      <div className="field_username">
        <span>Last Username: {getUserInfo}</span>
      </div>
    );
  })
);

export default UserInfo;
