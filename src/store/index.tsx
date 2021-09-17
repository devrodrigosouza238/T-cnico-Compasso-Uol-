import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Config } from '../../store/ducks/config/types';
import * as ConfigActions from '../../store/ducks/config/actions';

interface StateProps {
  config: Config;
}
interface DispatchProps {
  configRequest(): void;
}

type Props = StateProps & DispatchProps;

class ConfigComponent extends Component<Props> {
  componentDidMount() {
    const { configRequest } = this.props;
    configRequest();
  }
  render() {
    const { config } = this.props;
    return (
      <View>
        <Text>{config.name}</Text>
      </View>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ConfigActions, dispatch);

const mapStateToProps = (state: ApplicationState) => ({
  config: state.config.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfigComponent);
