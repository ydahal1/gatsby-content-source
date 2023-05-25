---
slug: boolean
label: Boolean
---

# BOOLEAN

A Boolean data type is a TRUE/FALSE expression.

## Syntax

<EclCode>
BOOLEAN attribName
<EclCode>

| _Value_    | _Definition_                                    |
| :--------- | :---------------------------------------------- |
| BOOLEAN    | Optional.                                       |
| attribName | The name by which the variable will be invoked. |

#### Example

<br>
<pre id = 'BoolExp_1'>

<EclCode>
/*
BOOLEAN Examples.
*/

isFlag := TRUE;
OUTPUT(isFlag, NAMED('isFlag'));

// When defined BOOLEAN 1 = TRUE and 0 = FALSE
BOOLEAN hasValidName := 0;
OUTPUT(HasValidName, NAMED('HasValidName'));

// Boolean evaluation
OUTPUT(10 >= 2, NAMED('Evaluation'));

<EclCode>

</pre>
<a className="trybutton" href="javascript:OpenECLEditor(['BoolExp_1'])"> Try Me </a>

</br>
</br>
<EclCode>
