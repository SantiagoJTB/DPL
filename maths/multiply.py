def multiply(*args):
    """
    Multiplica un número indefinido de argumentos.

    Parameters
    ----------
    *args : float
        Números que se desean multiplicar. Si no se pasa ningún argumento, se devuelve 1.

    Returns
    -------
    float
        El producto de todos los números. Si no se pasa ningún argumento, devuelve 1.

    Examples
    --------
    >>> multiply(2, 3, 5)
    30
    >>> multiply(10)
    10
    >>> multiply()
    1
    """
    if not args:
        return 1
    result = 1
    for num in args:
        result *= num
    return result
