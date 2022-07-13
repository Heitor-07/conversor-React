import React from "react";
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2, // how many digits allowed after the decimal
    
    allowNegative: false,
    allowLeadingZeroes: false,
  }

const MoedaInput = ({ maskOptions, ...inputProps}) => {
    const moedaMask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions,
    })

    return <MaskedInput mask={moedaMask} {...inputProps} />

}

MoedaInput.defaultProps = {
    inputMode: 'numeric',
    maskOptions: {},
}

export default MoedaInput;
