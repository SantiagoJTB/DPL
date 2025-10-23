def divide(*args):
    """
    Divide un número indefinido de argumentos en orden secuencial.

    Parameters
    ----------
    *args : float
        Números que se desean dividir. Se debe pasar al menos un número.

    Returns
    -------
    float
        El resultado de dividir todos los números en orden. Si se pasa un solo número, devuelve ese número.

    Raises
    ------
    ValueError
        Si se intenta dividir por cero o no se pasa ningún argumento.

    Examples
    --------
    >>> divide(100, 2, 5)
    10.0
    >>> divide(50)
    50
    >>> divide()
    Traceback (most recent call last):
        ...
    ValueError: Se requiere al menos un argumento.
    >>> divide(10, 0)
    Traceback (most recent call last):
        ...
    ValueError: Cannot divide by zero.
    """
    if not args:
        raise ValueError("Se requiere al menos un argumento.")
    result = args[0]
    for num in args[1:]:
        if num == 0:
            raise ValueError("Cannot divide by zero.")
        result /= num
    return result