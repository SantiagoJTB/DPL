def subtract(*args):
    """
    Resta un número indefinido de argumentos en orden secuencial.

    Parameters
    ----------
    *args : float
        Números que se desean restar. Se debe pasar al menos un número.

    Returns
    -------
    float
        El resultado de restar todos los números en orden. Si se pasa un solo número, devuelve ese número.
        Si no se pasa ningún argumento, devuelve 0.

    Examples
    --------
    >>> subtract(100, 20, 30, 40)
    10
    >>> subtract(50)
    50
    >>> subtract()
    0
    """
    if not args:
        return 0
    result = args[0]
    for num in args[1:]:
        result -= num
    return result
