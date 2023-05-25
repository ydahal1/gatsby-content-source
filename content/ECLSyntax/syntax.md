---
slug: syntax
label: Syntax
---

# ECL Syntax

## Definition

- Definition operator is `:=`
- Terminator for statement is `;`

<EclCode>
 Val1 := 12;
 Val2 := 65;

Result := Val1 + Val2;

<EclCode>

## Comment Out

**Single Line**

`//` is used to comment out one line.

<EclCode>
// One line is commented out
// X + Y = Z
<EclCode>

**Block comment**

`/* ..... */` is used for block commenting out.

<EclCode>
/* This is a block comment.
    It can be used to comment out multiple lines.*/
<EclCode>

## Field Access

You can use of object.property to access dataset fields and definitions.

- `dataset.fieldName` Referencing an attribute from a module
- `moduleName.definition` Referencing a field from dataset

<EclCode>
MyDataset.FieldName

MyModule.ExportedValue

<EclCode>

## Statement Types

There are two types of coding in ECL. Definitions and Actions.

#### Example

<br>
<pre id = "IntroExp_1">

<EclCode>
/*
Action vs Definition Examples.
*/
STRING  Def1  := 'OUTPUT turns definition ';
STRING  Def2  := 'to action.';

// Action: String concatenation
Def1 + Def2;

Val1 := 12;
Val2 := 50;

// Definition
SomeResult := Val1 + Val2;

// Action: print result
SomeResult;
<EclCode>

</pre>
<a className="trybutton" href="javascript:OpenECLEditor(['IntroExp_1'])"> Try Me </a>

</br>
</br>

### Definition

Assigning an expression to an attribute. Definitions can't not be executing unless it is wrapped in an action and are defined by `:=`. Let's take a look at an example:

`Val := 23;` is a Definition. Attribute Val is defined and value 23 is assigned to it. To turn `Val` to an action we can wrap it in an OUTPUT.

`OUTPUT(Val);` is an Action and result would be 23.

<EclCode>
[attrib_type] attrib_name := value
<EclCode>

| Value       | Definition                                       |
| :---------- | :----------------------------------------------- |
| attrib_type | Optional, compiler can infer it from Definition. |
| attrib_name | The name by which the Definition will be invoked |
| value       | Assigned value to the Definition.                |

### Action

Action simply means "do something." Actions trigger execution of a workunit that produces results.

<EclCode>
OUTPUT('this is an action');
SUM(1,2);
<EclCode>

</br>

#### Example

<br>
<pre id = 'IntroExp_2'>

<EclCode>
/*
Action vs Definition Examples.
*/

// Defining an attribute
str := 'Hello Word';

// Turning it into Action
OUTPUT(str, NAMED('My_First_Program'));

// Defining an Action
NumOne := MAX(1,2,5,6);

// Turning to Action
OUTPUT(NumOne, NAMED('ActionThis'));

// Simple Actions, followings produce result
'my first ECL code';
1 + 4 + 5;
2 \* 3;

<EclCode>

</pre>
<a className="trybutton" href="javascript:OpenECLEditor(['IntroExp_2'])"> Try Me </a>

</br>
</br>
<EclCode>
