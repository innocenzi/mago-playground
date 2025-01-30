export const name = "Undefined";
export const content = `<?php

declare(strict_types=1);

// Implementing a non-existing interface:
class Foo implements FooInterface {
  public function getBar(): BarInterface {
    // Instantiating a non-existing class:
    return new Bar();
  }
  
  public function getBaz(): string {
    // Using a non-existing constant:
    return BAZ;
  }
  
  public function getQux(): string {
    // Calling a non-existing function:
    return qux();
  }
}
`;
