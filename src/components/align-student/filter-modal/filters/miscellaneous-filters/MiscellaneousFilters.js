import React from 'react';
import TogglableOption from '../../../../common/TogglableOption';
import NuUndergradFilter from './NuUndergradFilter';

export default props => (
    <div>
        <div>Miscellaneous</div>
        <NuUndergradFilter onToggle={props.onNuUndergradToggle} checker={props.nuUndergradChecker}/>
    </div>
);