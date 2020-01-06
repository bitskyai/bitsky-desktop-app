/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */
import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Tabs, PageHeader, Button, Typography } from "antd";
const { TabPane } = Tabs;
const { Title, Paragraph, Text } = Typography;
const packageJSON = require("../../../../package.json");
import { ipcRendererManager } from "../../ipc";
import { IpcEvents } from "../../../ipc-events";

import GeneralForm from "./GeneralForm";

class App extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  onSave() {
    ipcRendererManager.send(IpcEvents.CLOSE_SETTINGS);
  }

  onClose() {
    ipcRendererManager.send(IpcEvents.CLOSE_SETTINGS);
  }

  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className="munew-settings">
        <PageHeader
          title={formatMessage({ id: "munew.settings.title" })}
          style={{
            border: "1px solid rgb(235, 237, 240)"
          }}
          // subTitle="This is a subtitle"
          extra={[
            <Button key="closeBtn" type="link" onClick={this.onClose}>
              X{/* <FormattedMessage id="munew.settings.close" /> */}
            </Button>
          ]}
        ></PageHeader>
        <Tabs tabPosition="left">
          <TabPane
            tab={formatMessage({ id: "munew.settings.general" })}
            key="1"
          >
            <GeneralForm />
          </TabPane>
          <TabPane tab={formatMessage({ id: "munew.settings.about" })} key="2">
            <Typography className="tab-panel-content">
              <Title level={2}>
                <FormattedMessage id="munew.settings.about" />
              </Title>
              <Title level={3}>Munew {packageJSON.version}</Title>
              <Paragraph>
                <FormattedMessage id="munew.settings.productDescription" />
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    <a href="https://munew.io" target="_blank">
                      <FormattedMessage id="munew.settings.website" />
                    </a>
                  </li>
                  <li>
                    <FormattedMessage id="munew.settings.copyright" />
                  </li>
                  <li>
                    <a
                      href="https://github.com/munew/dia/blob/master/LICENSE"
                      target="_blank"
                    >
                      <FormattedMessage id="munew.settings.license" />
                    </a>
                  </li>
                </ul>
              </Paragraph>
              <Title level={2}>
                <FormattedMessage id="munew.settings.community" />
              </Title>
              <Paragraph>
                <ul>
                  <li>
                    <a href="https://github.com/munew/dia/issues/new" target="_blank">
                      <FormattedMessage id="munew.settings.reportBug" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/munew"
                      target="_blank"
                    >
                      <FormattedMessage id="munew.settings.github" />
                    </a>
                  </li>
                </ul>
              </Paragraph>
            </Typography>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default injectIntl(App);
