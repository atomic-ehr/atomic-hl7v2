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