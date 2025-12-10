## Architecture

Messages are parsed and generated as a generic data structure.

```ts

[
    {
        segment: "MSH",
        fields: {
            3: "SENDING_APP",
            7: "202312011200",
            9: { 1: "ADT", 2: "A01" },
            10: "MSG001"
        }
    },
    {
        segment: "PID",
        fields: {
            3: "12345",
            5: "Doe",
            7: "John",
            8: "M"
        }
    }
]
```

Library provides generated getters, setters and builders/readers which can be used to manipulate the message.
This utils are generated from the schema metadata.

Parser does not use any schema metadata. All smart helpers are working as overlay on top of the generic data structure. For example parser just parse everything into array of objects, but getter may allow you to access the group of segments.

This is fundamental design decision - which allows to be flexible, but still provide some type safety.
It's important that parsed or generated message could be formally "invalid" according to the schema, but still can be used.

## Parser corner cases.

Parser does not know is filed cardinality more than one or does it has subcomponents if only one subcomponent is present. That's why parser just parses into a simples version of structure:
for example if only one filed - it will be just object; if only one subcomponent - it will be a string. 

It's up to the helper functions to handle this cases. For example by accessing field with subcomponents - it will return an object with proper names based on type of the field.
For example by accessing field with subcomponents - it will return an object with proper names based on type of the field.