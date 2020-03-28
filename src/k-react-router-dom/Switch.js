import React, { Component } from "react";
import { RouterContext } from "./RouterContext";
import matchPath from "./matchPath";

export default class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          // 找出渲染的，第一个符合匹配的元素，存在element
          // const {location} = context;
          // 优先用props上的location
          const location = this.props.location || context.location;
          let element,
            match = null;
          let { children } = this.props;
          // children = [children];
          // // this.props.children  数组形式、对象
          // for (let i = 0; i < children.length; i++) {
          //   let child = children[i];
          //   if (match === null && React.isValidElement(child)) {
          //     element = child;
          //     const path = child.props.path;
          //     match = path
          //       ? matchPath(location.pathname, {...child.props, path})
          //       : context.match;
          //   }
          // }
          // 掌握React.Children用法，也可以使用自己的方式，自己循环
          React.Children.forEach(children, child => {
            if (match === null && React.isValidElement(child)) {
              element = child;
              const path = child.props.path;
              match = path
                ? matchPath(location.pathname, {
                    ...child.props,
                    path
                  })
                : context.match;
            }
          });
          // console.log("element", element, React.isValidElement(element)); //sy-log
          // 掌握createElement与cloneElement的区别，以下两种方式都可以成功渲染
          // createElement(type, props)
          // return match
          //   ? React.createElement(element.type, {
          //       ...element.props,
          //       location,
          //       computedMatch: match
          //     })
          //   : null;
          // cloneElement(element, otherProps)
          return match
            ? React.cloneElement(element, {
                location,
                computedMatch: match
              })
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
