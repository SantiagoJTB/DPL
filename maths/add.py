def add(*args):
    """
        Suma un número indefinido de argumentos.

        Parameters
        ----------
        *args : float
            Números que se desean sumar. Se puede pasar 0 o más argumentos.

        Returns
        -------
        float
            La suma de todos los números. Si no se pasan argumentos, devuelve 0.

        Examples
        --------
        >>> add(2, 3, 5)
        10
        >>> add(1)
        1
        >>> add()
        0
        """

    return sum(args) if args else 0