<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePqrsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pqrs', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('surname');
            //Llave Foranea
            $table->bigInteger('infrastructure_id')->unsigned();
            $table->foreign('infrastructure_id')->references('id')->on('infrastructures');
            $table->string('in_code');
            //Llave Foranea
            $table->bigInteger('problem_id')->unsigned();         
            $table->foreign('problem_id')->references('id')->on('problem_lists');
            //Llave Foranea
            $table->bigInteger('neighbor_id')->unsigned();         
            $table->foreign('neighbor_id')->references('id')->on('neighbors');
            $table->string('address');
            $table->string('issue',250); 
            $table->integer('phone');
            $table->float('lat');
            $table->float('long');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pqrs');
    }
}
