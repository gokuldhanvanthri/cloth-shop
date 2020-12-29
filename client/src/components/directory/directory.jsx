import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

const Directory = ({ sections = [] }) => (
  <div className="directory-menu">
    {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      ></MenuItem>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
