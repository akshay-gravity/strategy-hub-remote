import { Col, Form } from 'react-bootstrap';

export interface ToggleSwitchModel {
  onStateString?: string;
  offStateString?: string;
  switchState?: boolean;
  handleChange: (status: boolean) => any;
  customCSSClasses?: string
}

const ToggleSwitch = (props: ToggleSwitchModel) => {
  return (
    <Form.Group className={'d-flex align-items-center ' + (props.customCSSClasses ?? '')}>
      <Form.Text className='m-1' id={props.switchState === true ? 'off' : 'offstate'}>{props.offStateString ?? 'Off'}</Form.Text>
      <Form.Check
        type="switch"
        id="custom-switch"
        onChange={(e) => props.handleChange(e.target.checked)}
      />
      <Form.Text className='m-1' id={props.switchState === false ? 'on' : 'onstate'}>{props.onStateString ?? 'On'}</Form.Text>
    </Form.Group>
  );
};

export default ToggleSwitch;
