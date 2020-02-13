<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pqr extends Model
{
    protected $fillable = ['name', 'surname','in_type', 'in_code', 'address', 'issue','lat','long'];
}
