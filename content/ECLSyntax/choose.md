---
slug: choose
label: Choose
---

# CHOOSE

CHOOSE function eEvaluates the expression and returns the value parameter whose ordinal position in the list of parameters corresponds to the result of the expression. All values for this function must have the <t style='color:green'>same type </t>. If no match is found it will return the else-value.

#### Example

<br>
<pre id = 'ChooseExp_1'>

<EclCode>
/*
CHOOSE Example:
*/

Eval := 4;

CHOOSE(Eval, 2, 3, 5, 6, 20); // Returns 6

CHOOSE(Eval, 6, 6, 7, 10, 9, 11); // Returns 10

CHOOSE(Eval, 3, 4, 8); // Returns 8 (the else value)

<EclCode>

</pre>
<a className="trybutton" href="javascript:OpenECLEditor(['ChooseExp_1'])"> Try Me </a>

</br>
</br>

## Syntax

<EclCode>
CHOOSE(Expression, Value1,... , ValueN, Else);
<EclCode>

| _Value_         | _Definition_                                    |
| :-------------- | :---------------------------------------------- |
| Expression      | Evaluation field                                |
| Value1 … ValueN | If expression matches it will return the result |
| Else            | If nothing matches else-value is returned       |

#### Example

<br>
<pre id = 'ChooseExp_2'>

<EclCode>
/*
CHOOSE Example:
*/

CHOOSE(2, 3, 5, 6, 20); // Returns 5

CHOOSE(3, 'foo', 'bar', 'baz'); // Returns 'baz'

getVal := CHOOSE(5, 'foo', 'bar', 'baz'); // Returns 'baz' (the else value)

OUTPUT(getVal, NAMED('getVal'));

<EclCode>

</pre>
<a className="trybutton" href="javascript:OpenECLEditor(['ChooseExp_2'])"> Try Me </a>

</br>
</br>
<EclCode>
