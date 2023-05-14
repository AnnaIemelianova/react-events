import React from "react";
import PropTypes from 'prop-types';
import { ButtonDecrease, ButtonIncrease, CounerSection, CounerValue, CounterControls } from "./Counter.styled";

export class Counter extends React.Component {

    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {
        initialValue: PropTypes.number,
    };

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = event => {
        console.log('увеличить');
        console.log(event);
        console.log(event.type);
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            }
        })
    };

    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            }
        })
    };
    render() {
        return (
            <CounerSection>
                <CounerValue>{this.state.value}</CounerValue>
                <CounterControls>
                    <ButtonIncrease onClick={this.handleIncrement}>збільшити на 1</ButtonIncrease>
                    <ButtonDecrease onClick={this.handleDecrement}>зменшити на 1</ButtonDecrease>
                </CounterControls>
            </CounerSection>
        )
    }
}