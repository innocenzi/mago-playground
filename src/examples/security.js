export const name = "Security";
export const content = `<?php

declare(strict_types=2);

// FIXME: Literal password in code:
const PASSWORD = "123";

// FIXME: Insecure comparison of sensitive data:
if ($_POST['password'] === PASSWORD) {
   // FIXME: Tainted data passed to a sink construct:
   // TODO: escape the input
   echo "Hello", $_POST['user'];
}

?>
`;
