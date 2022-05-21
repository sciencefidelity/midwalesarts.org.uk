import React from 'react'
import { FormField } from '@sanity/base/components'
import { TextInput, Stack, Text } from '@sanity/ui'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'
import { useId } from '@reach/auto-id' // hook to generate unique IDs

const StringWithLimits = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value
    readOnly, // Boolean if field is not editable
    placeholder, // Placeholder text from the schema
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus, // Method to handle focus state
    onBlur, // Method to handle blur state
    onChange // Method to handle patch events
  } = props

  const inputId = useId() // Creates a unique ID for our input
  const MaxConstraint = type.validation[0]._rules.filter(
    rule => rule.flag === 'max'
  )[0].constraint
  const handleChange = React.useCallback(
    event => {
      const inputValue = event.currentTarget.value
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
    },
    [onChange]
  )
  return (
    <Stack space={1}>
      <FormField
        description={type.description} // Creates description from schema
        title={type.title} // Creates label from schema title
        __unstable_markers={markers} // Handles all markers including validation
        __unstable_presence={presence} // Handles presence avatars
        compareValue={compareValue} // Handles "edited" status
        inputId={inputId} // Allows the label to connect to the input field
      >
        <TextInput
          id={inputId} // A unique ID for this input
          onChange={handleChange} // A function to call when the input value changes
          value={value || ''} // Current field value
          readOnly={readOnly} // If "readOnly" is defined make this field read only
          placeholder={placeholder} // If placeholder is defined, display placeholder text
          onFocus={onFocus} // Handles focus events
          onBlur={onBlur} // Handles blur events
          ref={ref}
        />
      </FormField>
      <Text muted size={1}>
        Recommended: <strong>{MaxConstraint}</strong> characters. You’ve used{' '}
        <strong style={{ color: '#30cf43', lineHeight: 2.1 }}>
          {value ? value.length : '0'}
        </strong>
      </Text>
    </Stack>
  )
})

export default StringWithLimits
