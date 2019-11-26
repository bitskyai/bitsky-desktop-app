/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import classNames from "classnames";
import { Button, Icon } from 'antd';
import {
  Corner,
  createBalancedTreeFromLeaves,
  getLeaves,
  getNodeAtPath,
  getOtherDirection,
  getPathToCorner,
  Mosaic,
  MosaicDirection,
  MosaicNode,
  MosaicParent,
  MosaicWindow,
  MosaicZeroState,
  updateTree
} from "react-mosaic-component";

import Explorer from "../../components/Explorer";
import TouchBarManager from "../../components/TouchBarManager";
import FilesEditor from '../../components/FilesEditor';

let windowCount = 3;

// const additionalControls = React.Children.toArray([<CloseAdditionalControlsButton />]);

export interface ExampleAppState {
  currentNode: MosaicNode<number> | null;
}

export default class App extends React.PureComponent<{}, ExampleAppState> {
  state: ExampleAppState = {
    currentNode: {
      direction: "row",
      first: 1,
      second: {
        direction: "column",
        first: 2,
        second: 3
      },
      splitPercentage: 40
    }
  };

  render() {
    return (
      // <React.StrictMode>
      <div className="react-mosaic-example-app">
        {this.renderNavBar()}
        <Mosaic<number>
          renderTile={this.getMosaicWindow}
          zeroStateView={<MosaicZeroState createNode={this.createNode} />}
          value={this.state.currentNode}
          onChange={this.onChange}
          onRelease={this.onRelease}
        />
      </div>
      // </React.StrictMode>
    );
  }

  private onChange = (currentNode: MosaicNode<number> | null) => {
    this.setState({ currentNode });
  };

  private onRelease = (currentNode: MosaicNode<number> | null) => {
    console.log("Mosaic.onRelease():", currentNode);
  };

  private getMosaicWindow = (count, path) => {
    let title: string = "",
      className: string = "",
      content: React.ReactElement<any> = <div />;
    if (count === 1) {
      title = "Explorer";
      content = <Explorer />;
    } else if (count === 2) {
      className = "no-toolbar";
      content = <FilesEditor/>;
    } else if (count === 3) {
      title = "Console";
      content = <div>Console</div>;
    }

    return (
      <MosaicWindow<number>
        className={className}
        draggable={false}
        title={title}
        createNode={this.createNode}
        path={path}
        toolbarControls={()=>{
          return <Icon type="close" />;
        }}
        // renderToolbar={() => {
        //   return (
        //     <div>
        //       <div title={title} className="mosaic-window-title">
        //         {title}
        //       </div>
        //       <div className="mosaic-window-controls">
        //         <Icon type="close" />
        //       </div>
        //     </div>
        //   );
        // }}
      >
        {content}
      </MosaicWindow>
    );
  };

  private createNode = () => ++windowCount;

  private renderNavBar() {
    return <TouchBarManager />;
  }
}
